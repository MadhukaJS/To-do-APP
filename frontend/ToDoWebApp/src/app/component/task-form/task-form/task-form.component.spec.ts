import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TaskFormComponent } from './task-form.component';
import { TaskServiceService, CreateTaskRequest, Task } from '../../../services/task-service.service';
import { of, throwError } from 'rxjs';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;
  let mockTaskService: jasmine.SpyObj<TaskServiceService>;

  beforeEach(waitForAsync(() => {
    // Create a spy object for TaskServiceService with the methods used
    mockTaskService = jasmine.createSpyObj('TaskServiceService', [
      'createTask',
      'getRecentTasks',
      'markTaskAsDone'
    ]);

    TestBed.configureTestingModule({
      imports: [TaskFormComponent], // standalone component import
      providers: [
        { provide: TaskServiceService, useValue: mockTaskService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit', () => {
    it('should call createTask and reload page on success', () => {
      spyOn(window, 'alert');
      spyOn(component, 'reloadPage');

      const dummyResponse: Task = {
        id: 1,
        title: 'Test',
        description: '',
        dueDate: '',
        completed: false
      };

      mockTaskService.createTask.and.returnValue(of(dummyResponse));

      component.onSubmit();

      expect(mockTaskService.createTask).toHaveBeenCalledWith(component.task);
      expect(window.alert).toHaveBeenCalledWith('task created!');
      expect(component.reloadPage).toHaveBeenCalled();
    });

    it('should log error on createTask failure', () => {
      const error = new Error('fail');
      mockTaskService.createTask.and.returnValue(throwError(() => error));
      spyOn(console, 'error');

      component.onSubmit();

      expect(console.error).toHaveBeenCalledWith('Error creating task:', error);
    });
  });

  describe('fetchRecentTasks', () => {
    it('should set recentTasks on success', () => {
      const tasks: Task[] = [
        { id: 1, title: 'Test', description: 'Desc', dueDate: '2025-01-01', completed: false }
      ];
      mockTaskService.getRecentTasks.and.returnValue(of(tasks));

      component.fetchRecentTasks();

      expect(mockTaskService.getRecentTasks).toHaveBeenCalled();
      expect(component.recentTasks).toEqual(tasks);
    });

    it('should log error on failure', () => {
      const error = new Error('fail');
      mockTaskService.getRecentTasks.and.returnValue(throwError(() => error));
      spyOn(console, 'error');

      component.fetchRecentTasks();

      expect(console.error).toHaveBeenCalledWith('Error loading recent tasks', error);
    });
  });

  describe('ngOnInit', () => {
    it('should call fetchRecentTasks', () => {
      spyOn(component, 'fetchRecentTasks');

      component.ngOnInit();

      expect(component.fetchRecentTasks).toHaveBeenCalled();
    });
  });
});
