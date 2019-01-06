package io.suhas.projectboard.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.suhas.projectboard.model.Task;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {
	
	public Task getById(Long id);
}
