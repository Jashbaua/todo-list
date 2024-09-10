import "./style.css"
import * as projects from './projects.js'
import * as ui from './ui.js'
import { format } from "date-fns"

if(localStorage.length==0){
    projects.create('Default Project')
    projects.selectProject('Default Project')
}
else projects.fetchLocalStorage()
ui.refreshContent(projects.getProjects())

function createProjectClicked(){
    ui.showNewProjectModal()
}
function projectNameFilled(projectName){
    if(!projects.canCreate(projectName)){
        ui.throwProjectCreationError()
    }
    else ui.setProjectInputValid()
}
function projectEdited(projectName){
    if(!projects.canCreate(projectName)){
        ui.throwProjectEditError()
    }
    else ui.setProjectEditValid()

}
function editedProjectSaved(projectName){
    projects.editSelected(projectName)
    ui.refreshContent(projects.getProjects())
}
function projectNameAdded(projectName){
    projects.create(projectName)
    ui.refreshContent(projects.getProjects())
}
function projectClicked(projectName){
    if(projects.isSelected(projectName)){
        ui.showEditProjectModal()
        return
    }
    projects.selectProject(projectName)
    ui.refreshContent(projects.getProjects())
}
function projectDeleteClicked(){
    projects.deleteProject()
    projects.removeSelected()
    ui.refreshContent(projects.getProjects())
}
function createTaskClicked(){
    if(projects.selected())
    ui.showCreateTaskModal()
}
function taskSaveClicked(name,description,due,priority){
    let formattedDue = due?format(new Date(due), 'M/d/yyyy, h:mmaaa'):'';    
    if(projects.isTaskSelected()){
        projects.modifyTask(name,description,formattedDue,priority)
        projects.toggleSelectTask()
    }
    else projects.saveTask(name,description,formattedDue,priority)
    ui.refreshContent(projects.getProjects())
}
function taskCheckerClicked(taskId){
    projects.toggleTaskFinished(taskId)
    ui.refreshContent(projects.getProjects())
}
function taskClicked(taskId){
    ui.showCreateTaskModal()
    ui.populateTaskModal(projects.getTask(taskId))
    projects.toggleSelectTask(taskId)
}
function taskDeleteClicked(){
    if(projects.isTaskSelected())projects.deleteTask('')
    ui.refreshContent(projects.getProjects())
}


export{taskClicked,taskCheckerClicked,taskDeleteClicked,taskSaveClicked,createTaskClicked,projectDeleteClicked,createProjectClicked,projectNameFilled,projectNameAdded,projectClicked,projectEdited,editedProjectSaved}