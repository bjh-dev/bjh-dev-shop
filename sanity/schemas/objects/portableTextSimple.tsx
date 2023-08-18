/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import '@/app/globals.css'

import { defineArrayMember, defineType } from 'sanity'

function RedText() {
  return <span style={{ color: '#e11d48' }}>A</span>
}
function RedTextDecorator(props: any) {
  return <span style={{ color: '#e11d48' }}>{props.children}</span>
}
function BlueText() {
  return <span style={{ color: '#2563eb' }}>A</span>
}
function BlueTextDecorator(props: any) {
  return <span style={{ color: '#2563eb' }}>{props.children}</span>
}
function BlueUnderline() {
  return (
    <span className="underline underline-offset-4 decoration-2 decoration-blue-600">
      A
    </span>
  )
}
function BlueUnderlineDecorator(props: any) {
  return (
    <span className="underline underline-offset-4 decoration-2 decoration-blue-600">
      {props.children}
    </span>
  )
}

function RedUnderline() {
  return (
    <span className="underline underline-offset-4 decoration-2 decoration-rose-600">
      A
    </span>
  )
}

function RedUnderlineDecorator(props: any) {
  return (
    <span className="underline underline-offset-4 decoration-2 decoration-rose-600">
      {props.children}
    </span>
  )
}

function FancyAmpersand() {
  return (
    <span
      style={{
        fontFamily:
          "Baskerville, 'Goudy Old Style', 'Palatino', 'Book Antiqua', serif",
        fontWeight: 'normal',
        fontSize: '110%',
        fontStyle: 'italic',
      }}
    >
      &amp;
    </span>
  )
}

function FancyAmpersandDecorator(props: any) {
  return (
    <span
      style={{
        fontFamily:
          "Baskerville, 'Goudy Old Style', 'Palatino', 'Book Antiqua', serif",
        fontWeight: 'normal',
        fontSize: '110%',
        fontStyle: 'italic',
      }}
    >
      {props.children}
    </span>
  )
}

function HeadingDecorator(props: any) {
  return <h1 className="text-3xl font-bold font-plantin">{props.children}</h1>
}

export default defineType({
  name: 'portableTextSimple',
  title: 'Simple Portable Text',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1', component: HeadingDecorator },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
      ],
      lists: [],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          {
            title: 'Blue Underline',
            value: 'blueUnderline',
            component: BlueUnderlineDecorator,
            icon: BlueUnderline,
          },
          {
            title: 'Red Underline',
            value: 'redUnderline',
            component: RedUnderlineDecorator,
            icon: RedUnderline,
          },
          {
            title: 'Blue Text',
            value: 'blueText',
            component: BlueTextDecorator,
            icon: BlueText,
          },
          {
            title: 'Red Text',
            value: 'redText',
            component: RedTextDecorator,
            icon: RedText,
          },
          {
            title: 'Fancy Ampersand',
            value: 'fancyAmpersand',
            component: FancyAmpersandDecorator,
            icon: FancyAmpersand,
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    // defineArrayMember({
    //   type: "fancyAmpersand",
    // }),
    // defineArrayMember({
    //   type: 'link'
    // }),
    // defineArrayMember({
    //   type: 'imageWithCaption'
    // }),
    // defineArrayMember({
    //   type: 'socialEmbed'
    // })
  ],
})
