package models;

import javax.persistence.Entity;
import javax.persistence.Id;

import play.data.validation.Constraints.MinLength;
import play.data.validation.Constraints.Required;
import play.db.ebean.Model;

@Entity
public class Besoin extends Model {
	
	private static final long serialVersionUID = 1L;

	@Id
	private Long Id;
	
	@Required
	private Long clientId;
	
	@Required
	@MinLength(value=5,message="Au moins 5 caracteres")
	private String description;
	
	
	
	
	public static Finder<Long,Besoin> find = new Finder<Long,Besoin>(
		    Long.class, Besoin.class
		  ); 
	
	
	

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public Long getClientId() {
		return clientId;
	}

	public void setClientId(Long clientId) {
		this.clientId = clientId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
	
	
}
