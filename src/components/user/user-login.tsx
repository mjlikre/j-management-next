'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useMutation } from '@urql/next'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

import { USER_LOGIN_MUTATION } from '@/graphql/user'

const formSchema = z.object({
  userName: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  password: z.string()
})

export const UserLogin = () => {
  const [{ error, fetching }, login] = useMutation(USER_LOGIN_MUTATION)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: '',
      password: ''
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    login({ loginInput: values })
  }

  const errorText = () => {
    const { graphQLErrors, networkError } = error || {}
    if (graphQLErrors) {
      const errorMessage = graphQLErrors[0].message
      console.log(errorMessage)

      if (errorMessage === 'Not Found') {
        return 'User Does not exist'
      }
      if (errorMessage === 'Password did not match') {
        return errorMessage
      }
    }

    if (networkError) {
      return "Network Error"
    }

    return ''
  }

  return (
    <div className="flex flex-col mt-48 flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="h-80 w-96 space-y-8 rounded border border-solid border-slate-400 p-8">
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <div>{errorText()}</div>
    </div>
  )
}