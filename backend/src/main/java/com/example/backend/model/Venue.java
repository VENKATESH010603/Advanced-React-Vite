package com.example.backend.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Venue {
    @Id
    // @Column(name="venue_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int vid;
    String name;
    String address;
    int pincode;
    String des;
    String link;
    int price;
    int capacity;
    String contactNum;
    String avail;
    float rating;
}
