import {fireEvent, render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {Pagination} from "../src"
import {globalColor, illaPrefix} from "@illa-design/theme";
import userEvent from '@testing-library/user-event'

test("Pagination render correctly", () => {
    render(<Pagination placeholder={"pagination"}
                       total={40}/>)
    expect(screen.getByPlaceholderText("pagination")).toBeInTheDocument()
    expect(screen.getByText("Total 40")).toBeInTheDocument()
    expect(screen.getByText("1")).toHaveStyle({
        color: `${globalColor(`--${illaPrefix}-blue-01`)}`
    })
})

test("Pagination render with defaultCurrent", () => {
    render(<Pagination defaultCurrent={6}
                       total={100}/>)
    expect(screen.getByText("6")).toHaveStyle({
        color: `${globalColor(`--${illaPrefix}-blue-01`)}`
    })
})

test("Pagination render with size", () => {
    render(<Pagination size={"small"}
                       total={100}/>)
    expect(screen.getByText("2")).toHaveStyle({
        width: `28px`,
        height: `28px`
    })
})


test("Pagination render with total is 0", () => {
    render(<Pagination placeholder={"pagination"}
                       hideOnSinglePage={false}
                       total={0}/>)
    expect(screen.getByPlaceholderText("pagination")).toBeInTheDocument()
    expect(screen.getByText("Total 0")).toBeInTheDocument()
})


test("Pagination render with jumper", () => {
    const changeEvent = jest.fn()
    render(<Pagination placeholder={"pagination"}
                       showJumper={true}
                       onChange={changeEvent}
                       total={100}/>)
    expect(screen.getByText("GO")).toBeInTheDocument()
    const input = screen.getByRole(`textbox`)
    expect(screen.getByText("1")).toHaveStyle({
        color: `${globalColor(`--${illaPrefix}-blue-01`)}`
    })
    fireEvent.change(input, {target: {value: "6"}})
    fireEvent.keyDown(input, {keyCode: 13})
    expect(input).toHaveDisplayValue("6")
    expect(screen.getAllByText("6")?.[0]).toHaveStyle({
        color: `${globalColor(`--${illaPrefix}-blue-01`)}`
    })
})

test("Pagination render with page-selector", () => {
    render(<Pagination placeholder={"pagination"}
                       total={100}/>)
    expect(screen.getByText("10/Page")).toBeInTheDocument()
})


test("Pagination render with sizeOptions", () => {
    render(<Pagination placeholder={"pagination"}
                       sizeCanChange={true}
                       sizeOptions={[20, 40, 60, 80]}
                       total={100}/>)
    expect(screen.getByText("80/Page")).toBeInTheDocument()

})


test("Pagination render with onChange", () => {
    const changeEvent = jest.fn()
    render(<Pagination total={100} onChange={changeEvent}/>)
    const targetPage = screen.getByText("4")
    fireEvent.click(targetPage)
    expect(changeEvent).toBeCalled()
    expect(targetPage).toHaveStyle({
        color: `${globalColor(`--${illaPrefix}-blue-01`)}`
    })
})


test("Pagination render with  onPageSizeChange", () => {
    const changeEvent = jest.fn()
    render(<Pagination total={100} defaultCurrent={6} onPageSizeChange={changeEvent}/>)
    userEvent.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', {name: '20/Page'}))
    const targetOption = screen.getByRole('option', {name: '20/Page'}) as HTMLOptionElement
    expect(changeEvent).toBeCalled()
    expect(targetOption.selected).toBe(true)
})




