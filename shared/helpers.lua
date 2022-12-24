-- Used to initialize the HUD UI, set `showHUD` to true
-- and as well as send the config to the UI
-- SHOULD BE RAN ONLY ONCE.
function initializeUI()
  SendNUIMessage({
    type = 'init',
    data = Config,
  })
end

-- Used to update the UI with the latest data so
-- the UI can stay in sync.
function updateUI(data)
  SendNUIMessage({
    type = 'update-statuses',
    data = data,
  })
end

-- Used for opening the HUD editor
function openHUDEditor()
  SetNuiFocus(true, true)
  SendNUIMessage({
    type = 'open-hud-editor',
  })
end

-- Used for converting HUD editor updated values
-- to storable values by removing irrelevant data.
function hudUpdateValuesToRequest(statuses)
  local cleanStatuses = {}

  for index, status in ipairs(statuses) do
    local currentStatus = status

    currentStatus.statusValue = nil
    currentStatus.iconIsValue = nil
    currentStatus.statusLabel = nil

    cleanStatuses[index] = currentStatus
  end

  return cleanStatuses
end
