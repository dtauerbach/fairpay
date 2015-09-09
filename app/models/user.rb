class User < ActiveRecord::Base
  validates_presence_of :uid

  def synchronous_validate_linkedin(json_response)
    li_trusted = false
    li_connected = true
    li_title = ''
    li_workplace = ''
    begin
      if json_response['numConnections'] > 100
        li_trusted = true
      end
      positions_list = json_response['positions']['values']
      positions_list.each do |position|
        if position['isCurrent']
          li_workplace = position['company']['name']
          li_title = position['title']
          break
        end
      end
      update({
               li_trusted: li_trusted,
               li_connected: li_connected,
               li_workplace: li_workplace,
               li_title: li_title
             })
    rescue
      # error with online verification
    end
  end
end
