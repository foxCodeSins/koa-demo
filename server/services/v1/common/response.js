const success = (msg) => ({
    code: 'C200',
    message: msg || '请求成功',
})

const error = (msg) => ({
    code: 'C500',
    message: msg || '请求错误'
})

module.exports = {
    success,
    error
}