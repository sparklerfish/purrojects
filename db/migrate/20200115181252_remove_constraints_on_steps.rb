class RemoveConstraintsOnSteps < ActiveRecord::Migration[5.2]
  def change
    change_column :steps, :title, :string, :null => true
  end
end
