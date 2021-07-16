const success = ({ data, msg }) => ({
    code: 'C200',
    message: msg || '请求成功',
    data
})

const error = ({ data, msg }) => ({
    code: 'C500',
    message: msg || '请求错误',
    data
})

module.exports = {
    success,
    error
}