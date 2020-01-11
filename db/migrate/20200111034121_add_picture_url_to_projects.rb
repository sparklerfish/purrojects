class AddPictureUrlToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :picture_url, :string
  end
end
