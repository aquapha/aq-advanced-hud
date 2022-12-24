-- Write your status getter logic inside this file. use `example/client.lua` for refference.

RegisterNetEvent('aq-hud:client:open-hud-editor')
AddEventHandler('aq-hud:client:open-hud-editor', function()
  openHUDEditor()
end)

RegisterNUICallback('close-hud-editer', function(data, cb)
  SetNuiFocus(false, false)
end)

RegisterNUICallback('update-hud', function(data, cb)
  cb({ status = 'ok' })

  TriggerServerEvent('aq-hud:server:update_statuses', data)
end)
