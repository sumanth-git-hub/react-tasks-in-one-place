import CompanyInfo from "./CompanyInfo"
import IndustryInfo from "./IndustryInfo"
import UserInfo from "./UserInfo"

const Steps = [
    {
        componentId: 0,
        componentName: 'User information',
        component: UserInfo,
    },
    {
        componentId: 1,
        componentName: 'Company information',
        component: CompanyInfo
    },
    {
        componentId: 2,
        componentName: 'Industry information',
        component: IndustryInfo   
    }
]

export default Steps