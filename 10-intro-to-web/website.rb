require "sinatra"

get "/first" do
    ans = 5 + 5
    "Hello World -  Answer is #{ans}"
end

post "/first" do
    "Goodbye"
end