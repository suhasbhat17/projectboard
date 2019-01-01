package io.suhas.projectboard.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.suhas.projectboard.service.TaskService;

@RestController
@RequestMapping("/api/board")
@CrossOrigin
public class TaskController {

	@Autowired
	private TaskService taskService;
}
