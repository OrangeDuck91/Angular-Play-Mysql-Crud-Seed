package controllers;

import java.util.List;

import models.Besoin;
import play.data.Form;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

public class BesoinCtrl extends Controller {
	
	final static Form<Besoin> formulaire = Form.form(Besoin.class);
	
	
	public static Result listAll(){
		
		List<Besoin> besoins = Besoin.find.all();
		return ok(Json.toJson(besoins));
	}
	
	public static Result findById(Long id){
		
		Besoin besoin = Besoin.find.byId(id);
		return ok(Json.toJson(besoin));
	}
	
	public static Result create(){
		
		Form<Besoin> formDatas = formulaire.bindFromRequest();
		
		if(formDatas.hasErrors()){
			return badRequest();
		}else{
			
			Besoin b = formDatas.get();
			b.save();
			return created(Json.toJson(b));
		}
		
		
	}
	
	public static Result update(Long id){
		Besoin b = Besoin.find.byId(id);
		if(b!=null){
			
			Form<Besoin> formDatas = formulaire.bindFromRequest();
			
			if(formDatas.hasErrors()){
				return badRequest();
			}else{
				
				Besoin bUpdate = formDatas.get();
				bUpdate.setId(id);
				bUpdate.update();
				
				return ok(Json.toJson(bUpdate));
			}
			
		}else{
			return badRequest();
		}
		
	
	}
	
	public static Result delete(Long id){
		Besoin b = Besoin.find.byId(id);
		if(b!=null){
			b.delete();
			return ok();
		}else{
			return badRequest();
		}
		
	}
	
}
