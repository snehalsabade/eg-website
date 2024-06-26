import {
  post,
  patch,
  handleResponseException,
  get,
  destroy
} from './RestClient'

const getToken = () => {
  return localStorage.getItem('token') || ''
}

export const registerPC = async (params = {}, header = {}) => {
  try {
    let headers = {
      ...header,
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
    const result = await post(
      `${process.env.REACT_APP_API_URL}/program-coordinator/register/program_coordinator`,
      params,
      {
        headers: headers
      }
    )
    if (result?.data) {
      return result?.data
    } else {
      return {}
    }
  } catch (e) {
    return handleResponseException(e)
  }
}
export const Pclist = async (params = {}, header = {}) => {
  try {
    let headers = {
      ...header,
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
    const result = await post(
      `${process.env.REACT_APP_API_URL}/program-coordinator`,
      params,
      {
        headers: headers
      }
    )
    if (result?.data) {
      return result?.data
    } else {
      return {}
    }
  } catch (e) {
    return handleResponseException(e)
  }
}

export const pcDetails = async (params = {}, header = {}) => {
  try {
    let headers = {
      ...header,
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
    const result = await post(
      `${process.env.REACT_APP_API_URL}/program-coordinator/${params?.id}`,
      params,
      {
        headers: headers
      }
    )
    if (result?.data) {
      return result?.data
    } else {
      return {}
    }
  } catch (e) {
    return handleResponseException(e)
  }
}
export const PcAvailableFacilitator = async (params = {}, header = {}) => {
  try {
    let headers = {
      ...header,
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
    const result = await post(
      `${process.env.REACT_APP_API_URL}/program-coordinator/availablefacilitator/${params?.id}`,
      params,
      {
        headers: headers
      }
    )
    if (result?.data) {
      return result?.data
    } else {
      return {}
    }
  } catch (e) {
    return handleResponseException(e)
  }
}
export const activitiesList = async (params = {}, header = {}) => {
  try {
    let headers = {
      ...header,
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
    const result = await post(
      `${process.env.REACT_APP_API_URL}/program-coordinator/activities/list`,
      params,
      {
        headers: headers
      }
    )
    if (result?.data) {
      return result?.data
    } else {
      return {}
    }
  } catch (e) {
    return handleResponseException(e)
  }
}
export const MarkActivity = async (params = {}, header = {}) => {
  try {
    let headers = {
      ...header,
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
    const result = await post(
      `${process.env.REACT_APP_API_URL}/program-coordinator/activities/create`,
      params,
      {
        headers: headers
      }
    )
    if (result?.data) {
      return result?.data
    } else {
      return {}
    }
  } catch (e) {
    return handleResponseException(e)
  }
}
export const activitiesDetails = async (params = {}, header = {}) => {
  try {
    let headers = {
      ...header,
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
    const result = await post(
      `${process.env.REACT_APP_API_URL}/program-coordinator/activities/list`,
      params,
      {
        headers: headers
      }
    )
    if (result?.data) {
      return result?.data
    } else {
      return {}
    }
  } catch (e) {
    return handleResponseException(e)
  }
}

export const AddRemovePrerak = async (params = {}, header = {}) => {
  try {
    let headers = {
      ...header,
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
    const result = await patch(
      `${process.env.REACT_APP_API_URL}/program-coordinator/${params?.id}`,
      params,
      {
        headers: headers
      }
    )
    if (result?.data) {
      return result?.data
    } else {
      return {}
    }
  } catch (e) {
    return handleResponseException(e)
  }
}

export const editActivity = async (params = {}, header = {}) => {
  try {
    let headers = {
      ...header,
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
    const result = await patch(
      `${process.env.REACT_APP_API_URL}/program-coordinator/activities/${params?.id}`,
      params,
      {
        headers: headers
      }
    )
    if (result?.data) {
      return result?.data
    } else {
      return {}
    }
  } catch (e) {
    return handleResponseException(e)
  }
}

export const deleteActivity = async ({ id, ...params } = {}, header = {}) => {
  try {
    let headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      ...header
    }
    const result = await destroy(
      `${process.env.REACT_APP_API_URL}/program-coordinator/activities/${id}`,
      {},
      {
        headers
      }
    )

    if (result?.data?.data) {
      let resultStudent = mapInterfaceData(result.data.data, interfaceData)
      return resultStudent
    } else {
      return {}
    }
  } catch (e) {
    return handleResponseException(e)
  }
}
