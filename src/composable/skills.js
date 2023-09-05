import {ref} from "vue";
import  axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/V1/";

export default function UseSkills(){
    const skills = ref([]);
    const skill = ref([]);
    const errors = ref({});
    const router = useRouter(); 

    const getSkills = async() => {
         const response = await axios.get("skills");
         skills.value = response.data.data
    }

    const getSkill = async (id) => {
        const response = await axios.get("skills/" + id);
        skill.value = response.data.data;
    };

    const storeSkill = async (data) => {
        try {
            await axios.post("skills", data);
            await router.push({name: "SkillIndex"})
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    }
    const UpdateSkill = async (id) => {
        try {
            await axios.put("skills/" + id, skill.value);
            await router.push({name: "SkillIndex"});
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    }
    const destroySkill = async (id) => {
        if (!window.confirm("are you sure?")) {
            return;    
        }
        await axios.delete("skills/" + id);
        await getSkills();
    };
    return {
        skill, skills, getSkill, getSkills, storeSkill, destroySkill, UpdateSkill, errors

    }
}