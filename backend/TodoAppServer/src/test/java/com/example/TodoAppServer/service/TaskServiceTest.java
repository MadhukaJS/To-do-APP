package com.example.TodoAppServer.service;

// TaskServiceTest.java
import com.example.TodoAppServer.dto.CreateTaskRequest;
import com.example.TodoAppServer.entity.Task;
import com.example.TodoAppServer.repository.TaskRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.PageRequest;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
        import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class TaskServiceTest {

    @Mock
    private TaskRepository taskRepository;

    @InjectMocks
    private TaskService taskService;

    private Task testTask;
    private CreateTaskRequest createTaskRequest;

    @BeforeEach
    void setUp() {
        testTask = new Task("Test Task", "Test Description");
        testTask.setId(1L);
        testTask.setCreatedAt(LocalDateTime.now());

        createTaskRequest = new CreateTaskRequest("New Task", "New Description");
    }

    @Test
    void createTask_ShouldReturnCreatedTask() {
        // Given
        when(taskRepository.save(any(Task.class))).thenReturn(testTask);

        // When
        Task result = taskService.createTask(createTaskRequest);

        // Then
        assertNotNull(result);
        assertEquals(testTask.getId(), result.getId());
        verify(taskRepository).save(any(Task.class));
    }

    @Test
    void getRecentTasks_ShouldReturnTop5Tasks() {
        // Given
        List<Task> tasks = Arrays.asList(testTask);
        when(taskRepository.findTop5ByCompletedFalseOrderByCreatedAtDesc(any(PageRequest.class)))
                .thenReturn(tasks);

        // When
        List<Task> result = taskService.getRecentTasks();

        // Then
        assertEquals(1, result.size());
        assertEquals(testTask.getId(), result.get(0).getId());
        verify(taskRepository).findTop5ByCompletedFalseOrderByCreatedAtDesc(any(PageRequest.class));
    }

    @Test
    void markTaskAsCompleted_ShouldUpdateTaskStatus() {
        // Given
        when(taskRepository.findById(1L)).thenReturn(Optional.of(testTask));
        when(taskRepository.save(any(Task.class))).thenReturn(testTask);

        // When
        Task result = taskService.markTaskAsCompleted(1L);

        // Then
        assertTrue(result.getCompleted());
        verify(taskRepository).findById(1L);
        verify(taskRepository).save(testTask);
    }

    @Test
    void markTaskAsCompleted_ShouldThrowException_WhenTaskNotFound() {
        // Given
        when(taskRepository.findById(1L)).thenReturn(Optional.empty());

        // When & Then
        assertThrows(RuntimeException.class, () -> taskService.markTaskAsCompleted(1L));
        verify(taskRepository).findById(1L);
        verify(taskRepository, never()).save(any(Task.class));
    }

    @Test
    void getTaskById_ShouldReturnTask_WhenTaskExists() {
        // Given
        when(taskRepository.findById(1L)).thenReturn(Optional.of(testTask));

        // When
        Optional<Task> result = taskService.getTaskById(1L);

        // Then
        assertTrue(result.isPresent());
        assertEquals(testTask.getId(), result.get().getId());
        verify(taskRepository).findById(1L);
    }

    @Test
    void getTaskById_ShouldReturnEmpty_WhenTaskNotExists() {
        // Given
        when(taskRepository.findById(1L)).thenReturn(Optional.empty());

        // When
        Optional<Task> result = taskService.getTaskById(1L);

        // Then
        assertFalse(result.isPresent());
        verify(taskRepository).findById(1L);
    }
}