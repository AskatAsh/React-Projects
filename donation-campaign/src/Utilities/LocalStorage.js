const getStoredDonation = () => {
    const getDonated = localStorage.getItem('donated');
    if (getDonated) {
        return JSON.parse(getDonated);
    }
    return [];
}
const saveAppliedDonation = id => {
    const storedDonated = getStoredDonation();
    const exists = storedDonated.find(donationId => donationId === id);
    if(!exists){
        storedDonated.push(id);
        localStorage.setItem('donated', JSON.stringify(storedDonated));
    }
}

export { getStoredDonation, saveAppliedDonation };