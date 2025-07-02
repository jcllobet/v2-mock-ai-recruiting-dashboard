import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import api from '../services/api';

function KanbanCard({ candidate, application }) {
  const navigate = useNavigate();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: application.uuid });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="kanban-card"
      onClick={() => navigate(`/candidates/${candidate.uuid}`)}
    >
      <h4>{candidate.name}</h4>
      <p style={{ fontSize: '0.875rem', color: 'var(--secondary-color)' }}>
        {candidate.current_position} at {candidate.current_company}
      </p>
      <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
        {application.position_name}
      </p>
      <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--secondary-color)' }}>
        Applied {new Date(application.applied_at).toLocaleDateString()}
      </div>
    </div>
  );
}

function KanbanColumn({ status, candidates, applications }) {
  const columnApplications = applications.filter(app => app.status === status.id);
  
  return (
    <div className="kanban-column">
      <div className="kanban-column-header">
        <span>{status.name}</span>
        <span className="badge">{columnApplications.length}</span>
      </div>
      <div className="kanban-column-content">
        <SortableContext
          items={columnApplications.map(app => app.uuid)}
          strategy={verticalListSortingStrategy}
        >
          {columnApplications.map((application) => {
            const candidate = candidates.find(c => 
              c.applications.some(a => a.uuid === application.uuid)
            );
            return candidate ? (
              <KanbanCard
                key={application.uuid}
                candidate={candidate}
                application={application}
              />
            ) : null;
          })}
        </SortableContext>
      </div>
    </div>
  );
}

function Candidates() {
  const [applications, setApplications] = useState([]);
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const { data: statuses = [] } = useQuery({
    queryKey: ['application-statuses'],
    queryFn: () => api.get('/api/application-statuses'),
  });

  const { data: candidates = [] } = useQuery({
    queryKey: ['candidates'],
    queryFn: () => api.get('/api/candidates'),
  });

  useEffect(() => {
    // Flatten all applications from candidates
    const allApplications = candidates.flatMap(candidate =>
      candidate.applications.map(app => ({
        ...app,
        candidateId: candidate.uuid,
      }))
    );
    setApplications(allApplications);
  }, [candidates]);

  const updateApplicationStatus = useMutation({
    mutationFn: ({ applicationId, newStatus }) =>
      api.patch(`/api/applications/${applicationId}`, { status: newStatus }),
  });

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const activeApplication = applications.find(app => app.uuid === active.id);
      const overApplication = applications.find(app => app.uuid === over.id);

      if (activeApplication && overApplication) {
        // Update local state
        setApplications(prev => {
          const activeIndex = prev.findIndex(app => app.uuid === active.id);
          const overIndex = prev.findIndex(app => app.uuid === over.id);
          
          const newApplications = arrayMove(prev, activeIndex, overIndex);
          
          // Update status if moving to different column
          if (activeApplication.status !== overApplication.status) {
            newApplications[overIndex] = {
              ...newApplications[overIndex],
              status: overApplication.status,
            };
            
            // Update on server
            updateApplicationStatus.mutate({
              applicationId: active.id,
              newStatus: overApplication.status,
            });
          }
          
          return newApplications;
        });
      }
    }
  };

  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Candidates</h1>
      
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="kanban-board">
          {statuses.map((status) => (
            <KanbanColumn
              key={status.id}
              status={status}
              candidates={candidates}
              applications={applications}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
}

export default Candidates;