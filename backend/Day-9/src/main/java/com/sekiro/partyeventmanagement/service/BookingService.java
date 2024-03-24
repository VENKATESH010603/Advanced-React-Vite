package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Bookings;
import com.example.backend.repository.BookingRepo;
import com.example.backend.repository.VenueRepo;

@Service
public class BookingService {
    @Autowired
    BookingRepo repo;
	@Autowired
	VenueRepo vrepo;

    public boolean addEvent(Bookings event) {
		// int id=event.venue.getId();
		repo.save(event);
		return true;
	}

    public List<Bookings> getAllEvents(){
        return repo.findAll();
    }

    public Optional<Bookings> getEventById(int id){
        return repo.findById(id);
    }

    public boolean deleteById(int id){
        repo.deleteById(id);
        return true;
    }

    public Bookings updateEvent(Bookings event, int id) {
		Bookings model=repo.findById(id).get();
		model.setBid(event.getBid());
		// model.setDate(event.getDate());
		// model.setLink(event.getLink());
		// model.setPeop(event.getPeop());
		// model.setTime(event.getTime());
		model.setStatus("Approved");
		// model.setType(event.getType());
		// model.setHost(event.getHost());
		// model.setUser(event.getUser());
		model.setVenue(event.getVenue());
		model.setEvent(event.getEvent());
		model.setService(event.getService());

		
		repo.save(model);
		return model;
	};
}
