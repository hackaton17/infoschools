class SchoolsController < ApplicationController

  def search
    @schools = School.all
  end
  
  def show
    @school = School.find(params[:id])
  end
end
