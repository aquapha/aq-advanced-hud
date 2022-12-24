-- Don't forget to update the command registering logic
-- to match your framework if you're intending to use
-- permissions checking, etc...

RegisterCommand('hud-editor', function()
  TriggerClientEvent('aq-hud:client:open-hud-editor')
end)

RegisterServerEvent('aq-hud:server:update_statuses')
AddEventHandler('aq-hud:server:update_statuses', function(statuses)
  local src = source

  -- Write your updating logic inside this event. use `example/server.lua` for reference.
end)
