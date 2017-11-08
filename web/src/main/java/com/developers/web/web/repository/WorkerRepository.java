package com.developers.web.web.repository;

import com.developers.web.web.model.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by danul on 08.11.2017.
 */
@Repository
public interface WorkerRepository extends JpaRepository<Worker, Long> {
}
