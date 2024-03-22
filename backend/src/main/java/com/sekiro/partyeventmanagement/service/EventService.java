package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Event;
import com.example.backend.repository.EventRepo;

@Service
public class EventService {
    @Autowired
    EventRepo repo;

    public boolean addEvent(Event event) {
		repo.save(event);
		return true;
	}

    public List<Event> getAllEvents(){
        return repo.findAll();
    }

    public Optional<Event> getEventById(int id){
        return repo.findById(id);
    }

    public boolean deleteById(int id){
        repo.deleteById(id);
        return true;
    }

    public Event updateEvent(Event event, int id) {
		Event model=repo.findById(id).get();
		model.setEid(event.getEid());
		model.setLink(event.getLink());
		model.setPeop(event.getPeop());
		model.setTime(event.getTime());
		model.setType(event.getType());
        model.setDes(event.getDes());
		
		repo.save(model);
		return model;
	};
}
