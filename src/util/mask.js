export const maskPhone = params => {
  const arr = params.split('');
  return `${arr[0]}${arr[1]}${arr[2]}-${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
};

export const maskUserId = params => {
  const x = params.split('');
  return `${x[0]}-${x[1]}${x[2]}${x[3]}${x[4]}-${x[5]}${x[6]}${x[7]}${x[8]}${x[9]}-${x[10]}${x[11]}-${x[12]}`;
};

export const removeMask = params =>{
    return params.split('-').join('')
}