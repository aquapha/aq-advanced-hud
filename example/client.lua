AQCore = exports['aq-core']:GetCoreObject()

RegisterNetEvent('aq-core:playerLoaded')
AddEventHandler('aq-core:playerLoaded', function(AQPlayer)
  initializeUI()

  AQCore.Player = AQPlayer
  AQCore.PlayerLoaded = true
end)

RegisterNetEvent('aq-status:updateStatuses')
AddEventHandler('aq-status:updateStatuses', function(statuses)
  if (not AQCore.PlayerLoaded) then return end

  local copiedStatuses = AQCore.Helpers.TopLevelCopy(statuses)

  local currentIndex = 1
  local usableStatuses = {}

  -- Since hunger and thirst max values are 10000, this logic
  -- converts only those 2 values into a range of 0 -> 100.
  for statusName, statusData in pairs(copiedStatuses) do
    if (statusName == 'hunger' or statusName == 'thirst') then
      local tempStatus = statusData

      tempStatus.statusValue = math.floor(tempStatus.statusValue / 100)

      usableStatuses[currentIndex] = tempStatus

      currentIndex = currentIndex + 1
    else
      usableStatuses[currentIndex] = statusData
      currentIndex = currentIndex + 1
    end
  end

  -- Triggers helper function to update the HUD UI with the latest data.
  updateUI(usableStatuses)
end)

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
