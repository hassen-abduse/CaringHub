import * as actionTypes from '../actionTypes'
import { baseUrl } from '../shared/baseUrl'

export const skillsLoading = () => ({
    type: actionTypes.SKILLS_LOADING
});

export const skillsFailed = (errmess) => ({
    type: actionTypes.SKILLS_FAILED,
    payload: errmess
});

export const addSkills = (skills) => ({
    type: actionTypes.ADD_SKILLS,
    payload: skills
});

export const addSkillItem = (skill) => ({
    type: actionTypes.ADD_SKILL_ITEM,
    payload: skill
});

export const fetchSkills = () => (dispatch) => {
    dispatch(skillsLoading(true))
    return fetch(baseUrl + 'skills')
        .then(response => {
            if (response.ok) {
                return response
            } else {
                const error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        },
            error => {
                const errMess = new Error(error.message)
                throw errMess
            })
        .then(response => response.json())
        .then(skills => dispatch(addSkills(skills)))
        .catch(error => dispatch(skillsFailed(error.message)))
}