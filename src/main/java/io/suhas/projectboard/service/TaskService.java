package io.suhas.projectboard.service;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.suhas.projectboard.model.Task;
import io.suhas.projectboard.repository.TaskRepository;

@Service
public class TaskService {
	
	@Autowired
	private TaskRepository taskRepository;
	
	public Task saveOrUpdateTask(Task task) {
		
		if(StringUtils.isBlank(task.getStatus())) {
			task.setStatus("TO_DO");
		}
		
		return taskRepository.save(task);
	}
	
	public Iterable<Task> getAllTasks(){
		return taskRepository.findAll();
	}
	
	public Task getById(Long id) {
		return taskRepository.getById(id);
	}
	
	public void deleteTask(Long id) {
		Task task = getById(id);
		taskRepository.delete(task);
	}
}
