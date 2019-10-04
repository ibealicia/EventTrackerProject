package com.skilldistillery.wine.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Wine {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private int year;
	private String type;
	private String color;
	private int rating;
	private double price;
	@Column(name = "tasting_notes")
	private String tastingNotes;
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "winery_id")
	private Winery winery;

	public Wine() {
	}

	public Wine(int id, String name, int year, String type, String color, int rating, double price, String tastingNotes,
			Winery winery) {
		super();
		this.id = id;
		this.name = name;
		this.year = year;
		this.type = type;
		this.color = color;
		this.rating = rating;
		this.price = price;
		this.tastingNotes = tastingNotes;
		this.winery = winery;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}
	

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getTastingNotes() {
		return tastingNotes;
	}

	public void setTastingNotes(String tastingNotes) {
		this.tastingNotes = tastingNotes;
	}

	public Winery getWinery() {
		return winery;
	}

	public void setWinery(Winery winery) {
		this.winery = winery;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Wine [id=").append(id).append(", name=").append(name).append(", year=").append(year)
				.append(", type=").append(type).append(", color=").append(color).append(", rating=").append(rating)
				.append(", price=").append(price).append(", tastingNotes=").append(tastingNotes).append(", winery=")
				.append(winery).append("]");
		return builder.toString();
	}

}
