import "./style.css"
import * as projects from './projects.js'
import * as ui from './ui.js'

projects.create('Default Project')
projects.selectProject('Default Project')
ui.refreshProjects(projects.getProjects())

function createProjectClicked(){
    ui.showNewProjectModal()
}
function projectNameFilled(projectName){
    projects.create(projectName)
    ui.refreshProjects(projects.getProjects())
}


export{createProjectClicked,projectNameFilled}