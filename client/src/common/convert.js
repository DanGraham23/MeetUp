export const convertPhoneNumber = (phoneNumber) => {
    var strPhoneNumber = phoneNumber.toString();
    if (strPhoneNumber.length !== 10) return "";
    var res = "(" + strPhoneNumber.slice(0,3) + ")-" + strPhoneNumber.slice(3,6) + "-" + strPhoneNumber.slice(6,10) ;
    return res;
}