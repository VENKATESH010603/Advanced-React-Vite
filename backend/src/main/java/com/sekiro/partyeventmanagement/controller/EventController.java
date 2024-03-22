package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Event;
import com.example.backend.service.EventService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/auth/admin/events")
public class EventController {
    @Autowired
    EventService service;


    @PostMapping("")
    public boolean addAdminEvent(@RequestBody Event event) {
        return service.addEvent(event);
    }

    @GetMapping("")
    public List<Event> getAllEvents() {
        return service.getAllEvents();
    }

    @GetMapping("/{id}")
    public Optional<Event> getEventById(@PathVariable int id) {
        return service.getEventById(id);
    }

    @DeleteMapping("/{id}")
    public boolean deleteById(@PathVariable int id){
        return service.deleteById(id);
    }

    @PutMapping("/{id}")
    public Event putEvent(@RequestBody Event event,@PathVariable int id) {
        return service.updateEvent(event, id);
    }
}
