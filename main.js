const {app, BrowserWindow, Menu} = require('electron')

const path = require('path')

let mainWindow

function createWindow () {
	
  mainWindow = new BrowserWindow({
    width: 300,
    height: 370, 
// width: 800, 
// height: 600, 
    webPreferences: {
	 nodeIntegration:true,
      preload:path.join(__dirname, 'preload.js')
    }
  })

 
  // mainWindow.loadFile('index.html')
  // mainWindow.loadFile('grub.html')
   mainWindow.loadURL(`http://localhost/Wordpress/wp_admin`)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
   
    mainWindow = null
	
  })
  
  
  // let grub = new BrowserWindow({
// width: 800, 
// height: 600, 
// // resizable:true, 
// parent:mainWindow,
// modal: true })
 
// grub.loadURL('https://github.com')
// grub.loadFile('grub.html')

// grub.once('ready-to-show', () => {
   // grub.show();
// })
  
}




app.on('ready',createWindow
// ,Menu.setApplicationMenu(null)
)

app.on('window-all-closed', function () {
 
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
 
  if (mainWindow === null) createWindow()
	   
})
