package com.example.TodoAppServer.service;

import com.example.TodoAppServer.dto.CreateTaskRequest;
import com.example.TodoAppServer.entity.Task;
import com.example.TodoAppServer.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TaskService {

    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Task createTask(CreateTaskRequest request) {
        Task task = new Task(request.getTitle(), request.getDescription());
        return taskRepository.save(task);
    }

    @Transactional(readOnly = true)
    public List<Task> getRecentTasks() {
        return taskRepository.findTop5ByCompletedFalseOrderByCreatedAtDesc(
                PageRequest.of(0, 5)
        );
    }

    public Task markTaskAsCompleted(Long taskId) {
        Optional<Task> taskOptional = taskRepository.findById(taskId);
        if (taskOptional.isPresent()) {
            Task task = taskOptional.get();
            task.setCompleted(true);
            return taskRepository.save(task);
        }
        throw new RuntimeException("Task not found with id: " + taskId);
    }

    @Transactional(readOnly = true)
    public Optional<Task> getTaskById(Long taskId) {
        return taskRepository.findById(taskId);
    }

    @Transactional(readOnly = true)
    public List<Task> getAllIncompleteTasks() {
        return taskRepository.findByCompletedFalseOrderByCreatedAtDesc();
    }
}
