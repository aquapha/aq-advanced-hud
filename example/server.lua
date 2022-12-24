AQCore = exports['aq-core']:GetCoreObject()

AQCore.RegisterCommand('hud-editor', 0, function(AQPlayer)
  AQPlayer.TriggerEvent('aq-hud:client:open-hud-editor')
end, 'HUD Valdymo menių')

RegisterServerEvent('aq-hud:server:update_statuses')
AddEventHandler('aq-hud:server:update_statuses', function(statuses)
  local src = source
  local AQPlayer = AQCore.GetPlayerFromId(src)

  local cleanStatuses = hudUpdateValuesToRequest(statuses)

  -- Triggers status handling script to update user statuses inside database
  AQPlayer.TriggerEvent('aq-status:client:renew-statuses', cleanStatuses)
end)
