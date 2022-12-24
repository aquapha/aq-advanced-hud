fx_version 'cerulean'

game 'gta5'

author 'aquapha'
description 'Advanced HUD ( Heads-up display )'
version '1.0.0'

client_scripts {
  'shared/helpers.lua',
  'shared/config.lua',
  'client/main.lua',
}

server_scripts {
  'shared/helpers.lua',
  'shared/config.lua',
  'server/main.lua',
}

ui_page 'app/build/index.html'

files {
  'app/build/index.html',
  'app/build/audio/*.mp3',
  'app/build/static/*.js',
  'app/build/static/*.css',
  'app/build/assets/*.svg',
}

lua54 'yes'
