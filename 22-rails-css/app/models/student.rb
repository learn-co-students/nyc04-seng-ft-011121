class Student < ApplicationRecord
    has_many :grades, dependent: :destroy
    has_many :courses, through: :grades

    validates :name, presence: true, uniqueness: true
    validates :age, numericality: {less_than: 120, message: "is too old"}
    validates :age, numericality: {greater_than: 18, message: "is too young"}
    validate :name_cannot_include_chicken

    has_secure_password
    
    
    def professor_name
        "Dr. #{name}"
    end

    def display_nicely
        "#{name} - Age: #{age}"
    end

    private

    def name_cannot_include_chicken
        if self.name && self.name.downcase.include?("chicken")
            self.errors.add(:name, "cannot include the word chicken")
        end
    end

end
