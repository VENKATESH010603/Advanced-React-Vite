package com.example.backend.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Bookings {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    int bid;
   
    // String type;
    // String host;
    // String link;
    // String peop;
    // String date;
    // String time;
    String status;
    String service;
    String venue;
    String event;
    String sprice;
    String vprice;
    String slink;
    String vlink;
    String elink;
    // @OneToOne(cascade = CascadeType.ALL)
    // @JoinColumn(name = "sid")
    // public Services sevice;

    // @OneToOne(cascade = CascadeType.ALL)
    // @JoinColumn(name = "eid")
    // public Event event;

    // @OneToOne(cascade = CascadeType.ALL)
    // @JoinColumn(name = "vid")
    // public Venue venue;

    // @OneToOne(cascade = CascadeType.ALL)
    // @JoinColumn(name="uid")
    // public User user;
    
}
