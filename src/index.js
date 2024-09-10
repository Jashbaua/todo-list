import "./style.css"
import * as projects from './projects.js'
import * as ui from './ui.js'

projects.create('Default Project')
projects.selectProject('Default Project')
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
    ui.refreshContent(projects.getProjects())
}


export{projectDeleteClicked,createProjectClicked,projectNameFilled,projectNameAdded,projectClicked,projectEdited,editedProjectSaved}