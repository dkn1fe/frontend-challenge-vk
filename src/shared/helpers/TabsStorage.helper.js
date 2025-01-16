

export const chooseTabsInStorage = (tab) => {
   return localStorage.setItem('tab',tab)
}

export const onGetTabInStorage = () => {
    return localStorage.getItem('tab')
}