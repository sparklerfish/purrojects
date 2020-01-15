class RemoveNullConstraintOnBodyColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :projects, :body, :text, :null => true
    change_column :steps, :body, :text, :null => true
  end
end
