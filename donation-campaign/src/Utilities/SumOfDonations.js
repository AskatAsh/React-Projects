const getTotalDonations = () => {
    const getTotalDonated = localStorage.getItem('total_donation');
    if(getTotalDonated){
        return JSON.parse(getTotalDonated);
    }
    return 0;
}

const sumofTotalDonations = (allDonations) => {
    const sumofTotalDonations = allDonations.reduce((first, last) => first + last.price, 0);
    // console.log(sumofTotalDonations);
    localStorage.setItem('total_donation', sumofTotalDonations);
}

const getYourDonations = () => {
    const getYourDonated = localStorage.getItem('your_donation');
    if(getYourDonated){
        return JSON.parse(getYourDonated);
    }
    return 0;
}

const sumofYourDonations = (newDonated) => {
    const yourDonations = getYourDonations();
    const sumofYourDonations = parseInt(yourDonations) + newDonated;
    console.log(sumofYourDonations);
    localStorage.setItem('your_donation', sumofYourDonations);
}

export {getTotalDonations, sumofTotalDonations, getYourDonations, sumofYourDonations};