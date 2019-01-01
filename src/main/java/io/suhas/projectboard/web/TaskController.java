package io.suhas.projectboard.web;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.suhas.projectboard.model.Task;
import io.suhas.projectboard.service.TaskService;

@RestController
@RequestMapping("/api/board")
@CrossOrigin
public class TaskController {

	@Autowired
	private TaskService taskService;
	
	@PostMapping("")
	public ResponseEntity<?> createTask(@Valid @RequestBody Task task, BindingResult result){
		
		if(result.hasErrors()) {
			Map<String, String> errorsMap = new HashMap<>();
			
			for(FieldError error : result.getFieldErrors()) {
				errorsMap.put(error.getField(), error.getDefaultMessage());
			}
			return new ResponseEntity<Map<String, String>>(errorsMap,HttpStatus.BAD_REQUEST);
		}
		
		Task responseTask = taskService.saveOrUpdateTask(task);
		return new ResponseEntity<Task>(responseTask,HttpStatus.CREATED);
	}
	
	
	@GetMapping("/all")
	public Iterable<Task> getAllTasks(){
		return taskService.getAllTasks();
	}
	
	@GetMapping("/{taskId}")
	public ResponseEntity<?> getTaskById(@PathVariable Long taskId){
		Task responseTask =  taskService.getById(taskId);
		return new ResponseEntity<Task>(responseTask,HttpStatus.OK);
	}

}
