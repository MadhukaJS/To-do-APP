package com.example.TodoAppServer.controller;

import com.example.TodoAppServer.dto.CreateTaskRequest;
import com.example.TodoAppServer.entity.Task;
import com.example.TodoAppServer.service.TaskService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
        import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(TaskController.class)
class TaskControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TaskService taskService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void createTask_ShouldReturnCreatedTask() throws Exception {
        // Given
        CreateTaskRequest request = new CreateTaskRequest("Test Task", "Test Description");
        Task createdTask = new Task("Test Task", "Test Description");
        createdTask.setId(1L);
        createdTask.setCreatedAt(LocalDateTime.now());

        when(taskService.createTask(any(CreateTaskRequest.class))).thenReturn(createdTask);

        // When & Then
        mockMvc.perform(post("/api/tasks/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.title").value("Test Task"))
                .andExpect(jsonPath("$.description").value("Test Description"));
    }

    @Test
    void getRecentTasks_ShouldReturnTaskList() throws Exception {
        // Given
        Task task = new Task("Test Task", "Test Description");
        task.setId(1L);
        when(taskService.getRecentTasks()).thenReturn(Arrays.asList(task));

        // When & Then
        mockMvc.perform(get("/api/tasks/get"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].title").value("Test Task"));
    }

    @Test
    void markTaskAsCompleted_ShouldReturnUpdatedTask() throws Exception {
        // Given
        Task completedTask = new Task("Test Task", "Test Description");
        completedTask.setId(1L);
        completedTask.setCompleted(true);

        when(taskService.markTaskAsCompleted(1L)).thenReturn(completedTask);

        // When & Then
        mockMvc.perform(put("/api/tasks/1/complete"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.completed").value(true));
    }

    @Test
    void getTaskById_ShouldReturnTask_WhenTaskExists() throws Exception {
        // Given
        Task task = new Task("Test Task", "Test Description");
        task.setId(1L);
        when(taskService.getTaskById(1L)).thenReturn(Optional.of(task));

        // When & Then
        mockMvc.perform(get("/api/tasks/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.title").value("Test Task"));
    }

    @Test
    void getTaskById_ShouldReturn404_WhenTaskNotExists() throws Exception {
        // Given
        when(taskService.getTaskById(1L)).thenReturn(Optional.empty());

        // When & Then
        mockMvc.perform(get("/api/tasks/1"))
                .andExpect(status().isNotFound());
    }
}