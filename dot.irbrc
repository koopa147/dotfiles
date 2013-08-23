IRB.conf.update(
  :SAVE_HISTORY => 10000,
  :PROMPT_MODE => :DEFAULT,
  :HISTORY_FILE => "#{ENV['HOME']}/.irb_history"
)

%w(pp rubygems).each do |l|
  begin
    require l
  rescue LoadError
    puts $!
  end
end

class Object
  def tapp
    tap { pp self }
  end
end

#begin
#  # @see http://route477.net/d/?date=20110421
#  Wirb.schema = {
#    :string => :white
#  }
#  Wirb.start
#rescue
#  puts $!
#end
