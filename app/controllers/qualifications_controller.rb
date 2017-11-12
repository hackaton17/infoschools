class QualificationsController < ApplicationController

  # TODO: there is no way to update a comment or delete it.
  
  def qualification_params
    params.require(:qualification).permit(:schoolb_id, :user, :user_type, 
    :value, :comment)
  end
  
  # Retrieve a school's qualifications.
  def index
    @qualifications = Qualification.where(schoolb_id: params[:schoolb_id])
  end
  
  def create
    @qualification = Qualification.create(qualification_params)
  end

end