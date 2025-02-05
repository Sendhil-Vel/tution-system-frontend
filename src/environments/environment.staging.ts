export const environment = {
    baseUrl: 'http://ec2-13-49-17-217.eu-north-1.compute.amazonaws.com:8085',
    apis: {
        dashboard: '/admin/report/dashboard',
        userLogin: '/adminlogin',
        agentLogin: '/agentlogin',
        studentLogin: '/studentlogin',
        tutorLogin: '/tutorlogin',
        adminRegister: '/admin/createadmin',
        agentRegister: '/admin/createagent',
        studentRegister: '/admin/createstudent',
        tutorRegister: '/admin/createtutor',
        studentRegisterDefault: '/register/student',
        tutorRegisterDefault: '/register/tutor',
        userLogout: '/admin/logout',
        activeUserCount: '/admin/report/useractivitycount',
        monthlyActiveUserCount: '/admin/report/usermonthlyactivitycount',
        monthlyTokenPurchaseCount: '/admin/report/userpurchasetokencount',
        postDetails: '/admin/report/posts',
        userCashOut: '/admin/report/cashoutinformation',
        userLastActiveDate: '/admin/report/useractivitydate',
        userProfiles: '/admin/report/userlisting',
        userSubscriptionInfo: '/admin/report/subscriptioninformation',
        cashOutWalletBalance: '/admin/report/cashoutwalletbalance',
        adminUserUpdate: '/admin/user/update',
        flaggedPosts: '/admin/report/flaggedposts',
        updateFlaggedPost: '/admin/report/updateflaggedpost',
        dailyDonation: '/admin/report/donation',
        adminListings: '/admin/admins',
        agentListings: '/admin/agents',
        studentListings: '/admin/students',
        tutorListings: '/admin/tutors',
        updateisverify: '/admin/updateisverify',
        updateisactive: '/admin/updateisactive',
        studentgetsubject: '/student/getsubjects',
        studentProfileUpdate: '',
        tutorProfileUpdate: '',
    }
};