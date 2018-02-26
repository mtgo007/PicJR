const electron = require('electron')
const ipcMain = electron.ipcMain
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
let title = "mathias";



require('electron-reload')(__dirname)
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow


function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1225, height: 800, maxWidth:1225, maxHeight:800, frame:false, show:false})

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  let mainContent = mainWindow.webContents

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  // mainContent.on('new-window', (e, url) => {
  //   e.preventDefault()
  //   let newWindow = new BrowserWindow({width: 1225, height: 800, maxWidth:1225, maxHeight:800})
  //   newWindow.loadURL(url)
  // })

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.



app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('set-title', (event, arg) => {
  title = arg;
})

ipcMain.on('get-title', (event, arg) => {
  // prints "ping"
  event.sender.send('title-reply', title)
})

exports.openWindow = (filename, w, h, close) => {
  let win = new BrowserWindow({width:w, height:h, frame:false, show:false});
  win.loadURL(`file://${__dirname}/`+filename+`.html`);
  win.once('ready-to-show', () => {
    win.show()
  })
}

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
